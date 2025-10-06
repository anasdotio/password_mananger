const request = require('supertest');
const app = require('../app');

describe('Password API', () => {
  let accessToken;

  beforeEach(async () => {
    // Register user

    await request(app).post('/api/auth/register').send({
      fullName: 'Anas Khan',
      email: 'anas@gmail.com',
      password: 'anaspass',
    });

    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'anas@gmail.com',
        password: 'anaspass',
      })
      .expect(200);

    accessToken = loginResponse.body.data;
  });

  describe('POST /api/passwords', () => {
    it('should create password successfully', async () => {
      const response = await request(app)
        .post('/api/passwords')
        .send({
          service: 'facebook',
          username: 'anas khan',
          password: 'anaspass',
        })
        .set('Authorization', `Bearer ${accessToken}`);

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty(
        'message',
        'Service created successfully'
      );
      expect(response.body.success).toBeTruthy();
    });

    it('should return error if duplicate service username exists', async () => {
      await request(app).post('/api/passwords').send({
        service: 'facebook',
        username: 'anas khan',
        password: 'anaspass',
      });

      const response = await request(app).post('/api/passwords', {
        service: 'facebook',
        username: 'anas khan',
        password: 'anaspass',
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBeFalsy();
      expect(response.body).toHaveProperty('message', 'Validation failed');
    });

    it('should return error if any field is missing', async () => {
      const response = await request(app).post('/api/passwords').send({
        // service: 'facebook',
        username: 'anas khan',
        password: 'anaspass',
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBeFalsy();
      expect(response.body).toHaveProperty('message', 'Validation failed');
    });
  });

  describe('GET /api/passwords', () => {
    it('should return passwords successfully', async () => {
      await request(app)
        .post('/api/passwords')
        .send({
          service: 'facebook',
          username: 'anas khan',
          password: 'anaspass',
        })
        .set('Authorization', `Bearer ${accessToken}`);

      const response = await request(app)
        .get('/api/passwords')
        .set('Authorization', `Bearer ${accessToken}`);

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty(
        'message',
        'passwords fetch successfully'
      );
      expect(response.body.success).toBeTruthy();
    });

    it('should return message if no password found', async () => {
      const response = await request(app)
        .get('/api/passwords')
        .set('Authorization', `Bearer ${accessToken}`);

      expect(response.statusCode).toBe(404);
      expect(response.body).toHaveProperty(
        'message',
        'No passwords found for this user'
      );
      expect(response.body.success).toBeFalsy();
    });
  });
});
