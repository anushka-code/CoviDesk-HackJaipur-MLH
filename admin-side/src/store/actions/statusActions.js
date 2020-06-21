export const updateStatus = (status) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const hospitalId = getState().firebase.auth.uid;
    firestore
      .collection("statuses")
      .add({
        ...status,
        firstName: profile.firstName,
        lastName: profile.lastName,
        hospitalId: hospitalId,
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
