const initState = {
  statuses: [
    {
      id: "1",
      date: "07/24/2020",
      covidCount: 56,
      totalCount: 34,
      testCount: 61,
      ppeLevel: 3,
      fullMedicalCare: false,
      testingAvailable: true,
      acceptCovid: false,
      acceptNonCovid: false,
      testCovidOnly: true,
    },
    {
      id: "2",
      date: "08/31/2020",
      covidCount: 34,
      totalCount: 54,
      testCount: 23,
      ppeLevel: 2,
      fullMedicalCare: true,
      testingAvailable: true,
      acceptCovid: false,
      acceptNonCovid: false,
      testCovidOnly: true,
    },
    {
      id: "3",
      date: "09/17/2020",
      covidCount: 12,
      totalCount: 98,
      testCount: 33,
      ppeLevel: 5,
      fullMedicalCare: false,
      testingAvailable: true,
      acceptCovid: true,
      acceptNonCovid: false,
      testCovidOnly: true,
    },
  ],
};
const statusReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_STATUS":
      console.log("updated status", action.status);
      return state;
    case "UPDATE_STATUS_ERROR":
      console.log("updated status error", action.err);
      return state;
    default:
      return state;
  }
};
export default statusReducer;
