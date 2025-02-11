import axios from 'axios';

class DataRepository {
    constructor(baseURL = 'http://localhost:3000/api') {
        this.api = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async fetchData() {
        try {
            const response = await this.api.get('/data');
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    async createData(data) {
        try {
            const response = await this.api.post('/data', data);
            return response.data;
        } catch (error) {
            console.error('Error creating data:', error);
            throw error;
        }
    }

    async updateData(id, data) {
        try {
            const response = await this.api.put(`/data/${id}`, data);
            return response.data;
        } catch (error) {
            console.error('Error updating data:', error);
            throw error;
        }
    }

    async deleteData(id) {
        try {
            const response = await this.api.delete(`/data/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting data:', error);
            throw error;
        }
    }
}

export default new DataRepository();
