const request = require('supertest');
const app = require('../app');

describe('Auth API', () => {
  describe('POST /api/auth/register', () => {
    const data = {
      fullName: 'anas khan',
      email: 'anas@gmail.com',
      password: 'testpass',
    };

    it('should registered user successfully', async () => {
      const response = await request(app).post('/api/auth/register').send(data);

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty(
        'message',
        'User registered successfully'
      );
      expect(response.body).toBeDefined(data.accessToken);
    });

    it('should return error for duplicate user registration', async () => {
      await request(app).post('/api/auth/register').send(data).expect(201);

      const response = await request(app).post('/api/auth/register').send(data);

      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty(
        'message',
        'Email already registered'
      );
    });

    it('should return error if any field is missing', async () => {
      const response = await request(app).post('/api/auth/register').send({
        fullName: 'Anas Khan',
        // email: 'anas@gmail.com',
        password: 'anaspass',
      });

      expect(response.status).toBe(400);
      expect(response.body.success).toBeFalsy();
      expect(response.body).toHaveProperty('message', 'Validation failed');
    });
  });

  describe('POST /api/auth/login', () => {
    it('should return login successfully', async () => {
      await request(app).post('/api/auth/register').send({
        fullName: 'Anas Khan',
        email: 'anas@gmail.com',
        password: 'anaspass',
      });

      const response = await request(app).post('/api/auth/login').send({
        email: 'anas@gmail.com',
        password: 'anaspass',
      });

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty(
        'message',
        'User loggedIn successfully'
      );
      expect(response.body.success).toBeTruthy();
    });

    it('should return error if user not found', async () => {
      const response = await request(app).post('/api/auth/login').send({
        email: 'anas@gmail.com',
        password: 'anaspass',
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBeFalsy();
      expect(response.body).toHaveProperty('message', 'Invalid credentials');
    });

    it('should return error if password is incorrect', async () => {
      await request(app).post('/api/auth/register').send({
        fullName: 'Anas Khan',
        email: 'anas@gmail.com',
        password: 'anaspass',
      });

      const response = await request(app).post('/api/auth/login').send({
        email: 'anas@gmail.com',
        password: 'wrongpass',
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBeFalsy();
      expect(response.body).toHaveProperty('message', 'Invalid credentials');
    });

    it('should return error if any field is missing', async () => {
      const response = await request(app).post('/api/auth/login').send({
        // email: 'anas@gmail.com',
        password: 'anaspass',
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBeFalsy();
      expect(response.body).toHaveProperty('message', 'Validation failed');
    });
  });
});
