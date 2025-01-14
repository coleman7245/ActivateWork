/*
    avgGrade = actualGrades / points_possible;
*/

// The provided course information.
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
];

function isDue(assignment_due_date, submission_date) {
    dueDate = convertDateStringToObject(assignment_due_date);
    submissionDate = convertDateStringToObject(submission_date);
    
    let isDue = true;
  
    switch(isDue) {
        case (submissionDate.year == dueDate.year && submissionDate.month == dueDate.month):
            isDue = true;
            break;
        default:
            isDue = false;
            break;
    }
  
    return isDue;
  }

  function filterLearnerSubmissions(assignments, learner_submissions, learner_id) {
    let submissionsPerLearner = learner_submissions.filter((learner) => learner.learner_id === learner_id);
    let filteredSubmissions = [];
    let due;
  
    for (sub of submissionsPerLearner) {
        due = false;

        for (as of assignments) {
            if (isDue(as.due_at, sub.submission.submitted_at) && as.id == sub.assignment_id) {
                due = true;
            }
        }

        if (due) {
            filteredSubmissions.push(sub);
        }
    }
  
    return filteredSubmissions;
  }

//console.log(filterLearnerSubmissions(AssignmentGroup.assignments, LearnerSubmissions, 125));

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

  function calculateSumOfScores(assignments, filtered_submissions) {
    let sumOfScores = 0;
    const lateDeduction = -15;
  
    for (sub of filtered_submissions) {
      for (as of assignments) {
        if (as.assignment_id === sub.assignment_id)
          if (isLate(as.due_at, sub.submission.submitted_at))
            sumOfScores += lateDeduction;
      }
      
      sumOfScores += sub.submission.score;
    }
  
    return sumOfScores;
  }

//console.log(calculateSumOfScores(AssignmentGroup.assignments, filterLearnerSubmissions(AssignmentGroup.assignments, LearnerSubmissions, 125)));

function calculateSumOfPossiblePoints(assignments, filtered_submissions) {
  let sumOfPossiblePoints = 0;
    for (assign of assignments) {
      for (sub of filtered_submissions) {
        if (isDue(assign.due_at, sub.submission.submitted_at) && assign.id === sub.assignment_id)
          sumOfPossiblePoints += assign.points_possible;
      }
    }

  return sumOfPossiblePoints;
}

//console.log(calculateSumOfPossiblePoints(AssignmentGroup.assignments, filterLearnerSubmissions(AssignmentGroup.assignments, LearnerSubmissions, 125)));

function findResults(assignments, filtered_submissions, learner_id) {
  let result = {};
  Object.defineProperty(result, "id", {enumerable : true, value : learner_id});
  Object.defineProperty(result, "avg", {enumerable : true, value : calculateSumOfScores(assignments, filtered_submissions) / calculateSumOfPossiblePoints(assignments, filtered_submissions)});

  for (assign of assignments) {
    for (sub of filtered_submissions) {
      if (assign.id === sub.assignment_id) {
        Object.defineProperty(result, `${assign.id}`, {enumerable : true, value : sub.submission.score / assign.points_possible});
      }
    }
  }

  return result;
}

//console.log(findResults(AssignmentGroup.assignments, filterLearnerSubmissions(AssignmentGroup.assignments, LearnerSubmissions, 125), 125));

function findUniqueIDs(submissions) {
  let uniqueIDs = [];

  for (sub of submissions) {
    if (!uniqueIDs.includes(sub.learner_id))
      uniqueIDs.push(sub.learner_id);
  }

  return uniqueIDs;
}

//console.log(findUniqueIDs(LearnerSubmissions));
  
function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.

    try {
      if (ag.course_id !== CourseInfo.id)
        throw new Error("Error: Assignment ID does not match the course ID!");
    }
    catch (e) {
      return null;
    }

    let result;
    let results = [];
    let uniqueIDs = findUniqueIDs(submissions);
    console.log(uniqueIDs);
    let filteredSubmissions;

    for (current_id of uniqueIDs) {
      filteredSubmissions = filterLearnerSubmissions(ag.assignments, submissions, current_id);
      result = findResults(ag.assignments, filteredSubmissions, current_id);
      results.push(result);
    }

    /*const result = [
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
    ];*/
  
    return results;
}
  
const results = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
console.log(results);