import React, { useState } from 'react';
import axios from 'axios';

// Define the structure of the expected response
interface TransactionDetails {
  status: string;
  amount: number;
  date: string;
  transactionId: string;
}

const TransactionPage: React.FC = () => {
  const [transactionNumber, setTransactionNumber] = useState<string>('');
  const [details, setDetails] = useState<TransactionDetails | null>(null);
  const [error, setError] = useState<string>('');

  const fetchTransactionDetails = async () => {
    try {
      const response = await axios.post('/api/check-telebirr', { transaction_number: transactionNumber });
      setDetails(response.data); // Data should match the TransactionDetails structure
    } catch (err) {
      setError('Error fetching transaction details');
      console.log(err)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Check Transaction</h2>
      <input
        type="text"
        value={transactionNumber}
        onChange={(e) => setTransactionNumber(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Transaction Number"
      />
      <button
        onClick={fetchTransactionDetails}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 w-full hover:bg-blue-700"
      >
        Check Details
      </button>

      {details && (
        <div className="mt-4">
          <h3 className="font-semibold">Transaction Details:</h3>
          <pre>{JSON.stringify(details, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default TransactionPage;
