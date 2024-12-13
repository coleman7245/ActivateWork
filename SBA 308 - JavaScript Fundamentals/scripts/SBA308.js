/*
    avgGrade = actualGrades / points_possible;
*/

/*// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
};
  
// The provided learner submission data.
const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
];*/

function generateUniqueID(course_id, assignment_id, learner_id) {
    return String(course_id) + String(assignment_id) + String(learner_id); 
}

function belongsToCourse(course_info, assignment_group) {
    return (assignment_group.course_id === course_info.id);
}

function convertDateStringToObject(dateStr) {
  let dateArray = dateStr.split('-');
  let year = 0;
  let day = 0;
  let month = 0;
  for (let i = 0; i < dateArray.length; i++) {
      if (i == 0)
          year = Number(dateArray[i]);
      else if (i == 1)
          month = Number(dateArray[i]);
      else
          day = Number(dateArray[i]);
  };

  return {year: year, month : month, day : day};
}

function isLate(assignment_due_date, submission_date) {
  dueDate = convertDateStringToObject(assignment_due_date);
  submissionDate = convertDateStringToObject(submission_date);

  let isLate = true;

  switch(isLate) {
      case (submissionDate.year > dueDate.year):
          isLate = true;
          break;
      case (submissionDate.year <= dueDate.year && submissionDate.month > dueDate.month):
          isLate = true;
          break;
      case (submissionDate.year <= dueDate.year && submissionDate.month <= dueDate.month && submissionDate.day > dueDate.day):
          isLate = true;
          break;
      default:
          isLate = false;
          break;
  }

  return isLate;
}

function calculateTotalScores(learner_submissions, learner_id) {
  let scores = learner_submissions.filer((learner) => {learner.learner.id === learner_id; return learner.submission.score;});

  console.log(scores);
}

function findResult(assignment_group, learner_submissions) {
    let avgGrade = 0;
    let totalScores = 0;
    let totalPointsPossible = 0;
    const lateDeduction = -15;
    let result = {};

    for (ls of learner_submissions) {
      Object.defineProperty.defineProperty(result, "learner_id", {enumerable : true, value : ls.learner_id});

      for (as of assignment_group) {
        if (as.id === ls.assignment_id)
        {
          totalScores += learner_submission.score;

          if (isLate(assignment, ls))
            totalScores += lateDeduction;

          totalPossiblePoints += assignment.points_possible;
        }
      }
    }

    avgGrade = totalScores / totalPointsPossible;

    return {learner_id : learnerID, average_grade : avgGrade};
}
  
function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.

    try {
      if (!belongsToCourse(ag.course_id, course.id))
        throw new Error("Error: Assignment ID does not match the course ID!");
    }
    catch (e) {
      return null;
    }

    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
}
  
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
console.log(result);