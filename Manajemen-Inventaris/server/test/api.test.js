const request = require('supertest');
const app = require('../index');

describe('API endpoints', () => {
    let newItemId;

    it('should fetch all items', async () => {
        const res = await request(app)
            .get('/api/items');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should create a new item', async () => {
        const newItem = {
            name: "Test Item",
            description: "This is a test item",
            quantity: 10,
            price: 100.00
        };
        const res = await request(app)
            .post('/api/items')
            .send(newItem);

        expect(res.statusCode).toEqual(201); // Perbaikan
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toEqual(newItem.name);

        newItemId = res.body.id;
    });

    it('should update an item', async () => {
        const updatedItem = {
            name: "Updated Item",
            description: "This is an updated item",
            quantity: 10,
            price: 100.00
        };

        const res = await request(app)
            .put(`/api/items/${newItemId}`)
            .send(updatedItem);

        expect(res.statusCode).toEqual(200);
        console.log(res.body)
        expect(res.body.name).toEqual(updatedItem.name);
    });

    it('should delete an item', async () => {
        const res = await request(app)
            .delete(`/api/items/${newItemId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Item Deleted');
    });
});
