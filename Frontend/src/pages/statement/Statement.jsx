
import { PieChart } from 'react-minimal-pie-chart';

const Statement = () => {
  // Mock data for shifts
  const shifts = [
    { id: 1, date: '2023-01-15', hours: 8, rate: 15.5, location: 'Main Office' },
    // Add more shift data as needed
  ];

  // Calculate total earnings
  const totalEarnings = shifts.reduce((total, shift) => total + shift.hours * shift.rate, 0);

  // Mock data for upcoming payment
  const upcomingPayment = {
    date: '2023-01-30',
    amount: 500, // Replace with actual upcoming payment amount
  };

  // Mock data for additional details
  const additionalDetails = {
    deductions: 50,
    bonuses: 100,
    taxes: 20,
    netEarnings: totalEarnings - 50 + 100 - 20,
  };

  return (
    <div style={styles.container}>
      <h1>Statement</h1>

      <div style={styles.card}>
        <h2>Shifts Completed</h2>
        <ul>
          {shifts.map((shift) => (
            <li key={shift.id}>
              {shift.date} - {shift.hours} hours at {shift.location}
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.card}>
        <h2>Earnings</h2>
        <p>Total Earnings: ${totalEarnings.toFixed(2)}</p>
        <div style={styles.chartContainer}>
          <PieChart
            data={[
              { title: 'Net Earnings', value: additionalDetails.netEarnings, color: '#4CAF50' },
              { title: 'Deductions', value: additionalDetails.deductions, color: '#FFC107' },
              { title: 'Bonuses', value: additionalDetails.bonuses, color: '#2196F3' },
              { title: 'Taxes', value: additionalDetails.taxes, color: '#F44336' },
            ]}
            animate
          />
        </div>
      </div>

      <div style={styles.card}>
        <h2>Upcoming Payment</h2>
        <p>Date: {upcomingPayment.date}</p>
        <p>Amount: ${upcomingPayment.amount.toFixed(2)}</p>
      </div>

      {/* Add more cards for other details about the shift as needed */}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '5%',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    display:'flex',
    flexWrap:'wrap',
   
  },
  card: {
    marginBottom: '20px',
    padding: '20px',
    height:'400px',
    width:'300px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  chartContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Statement;
