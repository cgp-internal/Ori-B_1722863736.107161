const dataManager = require('./dataManager');

let dataManagerInstance;

async function main() {
  try {
    dataManagerInstance = new dataManager();
    await dataManagerInstance.readCSV();
    console.log('CSV file read successfully.');
    
    // Set up the data management interface
    console.log('Data Management Interface:');
    console.log('1. Update a record');
    console.log('2. Delete a record');
    console.log('3. Exit');

    let choice;
    do {
      choice = prompt('Choose an option: ');
      switch (choice) {
        case '1': {
          const name = prompt('Enter record name: ');
          const phone = prompt('Enter phone number: ');
          const email = prompt('Enter email address: ');
          const address = prompt('Enter address: ');
          dataManagerInstance.updateRecord(name, phone, email, address);
          await dataManagerInstance.writeCSV();
          console.log('Record updated successfully.');
          break;
        }
        case '2': {
          const name = prompt('Enter record name: ');
          dataManagerInstance.deleteRecord(name);
          await dataManagerInstance.writeCSV();
          console.log('Record deleted successfully.');
          break;
        }
        case '3':
          console.log('Exiting...');
          break;
        default:
          console.log('Invalid option. Please choose again.');
      }
    } while (choice !== '3');
  } catch (err) {
    console.error('Error:', err);
  }
}

main();