```
function generateSampleRecords() {
  const records = [];
  for (let i = 0; i < 5; i++) {
    records.push({
      name: `Name ${i}`,
      phone: `0${i}123456789`,
      email: `name${i}@example.com`,
      address: `Address ${i}`
    });
  }
  return records;
}

module.exports = { generateSampleRecords };
```