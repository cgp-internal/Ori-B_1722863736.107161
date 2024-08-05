const fs = require('fs');
const csv = require('csv-parser');
const { Transform } = require('stream');

class DataManager {
  constructor() {
    this.records = {};
  }

  readCSV() {
    return new Promise((resolve, reject) => {
      fs.readFile('data/records.csv', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const rows = {};
          fs.createReadStream('data/records.csv')
            .pipe(csv())
            .on('data', (row) => {
              rows[row.name] = row;
            })
            .on('end', () => {
              this.records = rows;
              resolve(this.records);
            });
        }
      });
    });
  }

  writeCSV() {
    return new Promise((resolve, reject) => {
      const headers = ['name', 'phone', 'email', 'address'];
      const csvRows = [headers];

      Object.keys(this.records).forEach((key) => {
        csvRows.push([key, this.records[key].phone, this.records[key].email, this.records[key].address]);
      });

      const csvContent = csvRows.map((row) => row.join(',')).join('\n');

      fs.writeFile('data/records.csv', csvContent, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  updateRecord(name, phone, email, address) {
    if (this.records[name]) {
      this.records[name].phone = phone;
      this.records[name].email = email;
      this.records[name].address = address;
    } else {
      this.records[name] = { phone, email, address };
    }
  }

  deleteRecord(name) {
    if (this.records[name]) {
      delete this.records[name];
    }
  }
}

module.exports = {
  readCSV,
  writeCSV,
  updateRecord,
  deleteRecord,
};