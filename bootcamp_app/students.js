const { Client } = require('pg');

const client = new Client({
  user: 'vagrant',
  host: 'localhost',
  database: 'bootcampx'
});

client.connect();

client.query(`
  SELECT id, name, cohort_id
  FROM students
  LIMIT 10;
  `).then(res => {
    //console.log(res);
    console.log(res.rows);
  })
  .catch(error => {
    console.log(error.stack);
  })

client.query(`
    SELECT students.id, students.name, cohorts.name AS cohorts
    FROM students
    JOIN cohorts ON cohort_id = cohorts.id
    LIMIT 5;
`)
.then(res => {
  console.log(res.rows);
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohorts} cohort`);
  })
});

client.query(`
    SELECT students.id, students.name, cohorts.name AS cohorts
    FROM students
    JOIN cohorts ON cohort_id = cohorts.id
    WHERE cohorts.name LIKE $1
    LIMIT $2;
`, [`%process.argv[2]%`, process.argv[3]])
.then(res => {
  console.log(res.rows);
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohorts} cohort`);
  })
});