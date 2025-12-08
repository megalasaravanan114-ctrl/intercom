import React, { useState } from "react";
import transactions from "../../json-data/transactions";

export default function TransactionTable() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = transactions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const statusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-600/20 text-green-400";
      case "Pending":
        return "bg-yellow-600/20 text-yellow-400";
      case "Failed":
        return "bg-red-600/20 text-red-400";
      default:
        return "";
    }
  };

  return (
    <div className="p-6 bg-[#0d0d16] text-white w-full">
      <h2 className="text-2xl font-semibold mb-6">Transaction History</h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-300">
            <tr className="border-b border-gray-700 font-normal text-[#8C8C8C] bg-[#1E1A2D] rounded">
              <th className="py-4 pl-6 text-left">Date</th>
              <th className="py-4 text-left">Pair</th>
              <th className="py-4 text-left">Amount Swapped</th>
              <th className="py-4 text-left">Amount Received</th>
              <th className="py-4 text-left">Exchange Rate</th>
              <th className="py-4 text-left">Network</th>
              <th className="py-4 text-left">Tx Hash</th>
              <th className="py-4 text-left">Status</th>
              <th className="py-4 text-left">Gas Fee</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-800 hover:bg-gray-800/20 transition  text-[#FFFFFF] text-xs"
              >
                <td className="py-6 pl-6">{item.date}</td>
                <td className="py-6">{item.pair}</td>
                <td className="py-6">{item.amountSwapped}</td>
                <td className="py-6">{item.amountReceived}</td>
                <td className="py-6">{item.exchangeRate}</td>
                <td className="py-6 font-medium">{item.network}</td>
                <td className="py-6">{item.txHash}</td>
                <td className="py-6">
                  <span
                    className={`px-6 py-1 rounded-full text-xs font-medium ${statusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-6">{item.gasFee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="md:hidden space-y-4">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-[#151521] rounded-xl border border-gray-800"
          >
            <div className="flex justify-between mb-3">
              <p className="text-gray-400 text-xs">{item.date}</p>
              <span
                className={`px-2 py-1 rounded-full text-xs ${statusColor(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="text-gray-400">Pair</p>
              <p>{item.pair}</p>

              <p className="text-gray-400">Amount Swapped</p>
              <p>{item.amountSwapped}</p>

              <p className="text-gray-400">Amount Received</p>
              <p>{item.amountReceived}</p>

              <p className="text-gray-400">Exchange</p>
              <p>{item.exchangeRate}</p>

              <p className="text-gray-400">Network</p>
              <p className="font-medium">{item.network}</p>

              <p className="text-gray-400">Tx Hash</p>
              <p>{item.txHash}</p>

              <p className="text-gray-400">Gas Fee</p>
              <p>{item.gasFee}</p>
            </div>
          </div>
        ))}
      </div>

      {/* pagina */}
      {/* <div className="flex justify-end items-center mt-6 text-gray-300">
        <p className="mr-3">
          {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalItems)} of{" "}
          {totalItems}
        </p>

        <div className="flex gap-3">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition disabled:opacity-30"
          >
            Prev
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition disabled:opacity-30"
          >
            Next
          </button>
        </div>
      </div> */}
    </div>
  );
}
