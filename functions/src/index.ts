import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as admin from'firebase-admin';
admin.initializeApp();

const DASHBOARD_TABLE_NAME = 'dashboard';
const FIELD_ORDER_AMOUNT = 'order_amount';
const FIELD_ORDER_COUNT = 'order_count';


exports.updateOrderDashboard = functions.database.ref('/orders')
  .onCreate((snapshot) => {
    // ref
    const ref = admin.database().ref(DASHBOARD_TABLE_NAME);

    // increase count
    const updateCount = ref.child(FIELD_ORDER_COUNT)
      .transaction((current) => {
        return (current || 0) + 1;
      });

    // snapshot
    //
    // '-L_gA35kEwOMQhVzAcnK':
    //    { amount: 1,
    //      createdAt: 1552298033584,
    //      userId: 'flvoa9ATJXT06UhfLauXJE9COxn1' }
    let amount = 0;
    snapshot.forEach((child) => {
      console.log(child);

      const info = child.val();
      amount = info['amount'];

      // stop enumerate
      return true;
    });

    const updateAmount = ref.child(FIELD_ORDER_AMOUNT)
      .transaction((current) => {
        return (current || 0) + amount;
      });

    const promises = [updateCount, updateAmount];

    return Promise.all(promises)
      .then(() => {
        console.log('Counter updated.');
      });
  });
