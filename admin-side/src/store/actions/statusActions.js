export const updateStatus = (status) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("statuses")
      .add({
        ...status,
        hospitalName: "Lilavati Hospital",
        hospitalId: "12345",
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "UPDATE_STATUS", status });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_STATUS_ERROR", err });
      });
  };
};
