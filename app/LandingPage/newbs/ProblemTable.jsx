const ProblemTable = () => {
    const problems = [
      { index: 1, name: "Sum and Product", score: 2977844, rating: 1600, status: "AC" },
      { index: 2, name: "Reverse the Rivers", score: 2977844, rating: 1600, status: "AC" },
      { index: 3, name: "To Become Max", score: 2679999, rating: 1600, status: "-" },
    ];
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="w-3/4 bg-gray-800 text-white rounded-lg shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-700">
                <th className="py-3 px-4 text-left">Index</th>
                <th className="py-3 px-4 text-left">Problem</th>
                <th className="py-3 px-4 text-left">Score</th>
                <th className="py-3 px-4 text-left">Rating</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem) => (
                <tr key={problem.index} className="even:bg-gray-700 hover:bg-gray-600">
                  <td className="py-3 px-4">{problem.index}</td>
                  <td className="py-3 px-4 text-blue-400 cursor-pointer hover:underline">
                    {problem.name}
                  </td>
                  <td className="py-3 px-4">{problem.score}</td>
                  <td className="py-3 px-4">{problem.rating}</td>
                  <td className={`py-3 px-4 ${problem.status === "AC" ? "text-green-400" : "text-yellow-400"}`}>
                    {problem.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default ProblemTable;
  