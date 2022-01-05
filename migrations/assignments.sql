CREATE TABLE assignments (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  content TEXT,
  day INTEGER,
  chapter INTEGER,
  duration INTEGER
);

CREATE TABLE assignment_submissions (
  id SERIAL PRIMARY KEY NOT NULL,
  assignment_id SERIAL REFERENCES assignments(id) ON DELETE CASCADE,
  student_id SERIAL REFERENCES students(id) ON DELETE CASCADE,
  duration INTEGER,
  submission_date DATE
);
