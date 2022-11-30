export default (x, i, planOptionsLength, handleInputChange, handleAddClick, handleRemoveClick) => {
  return (
    <div>
    <div className="border m-7 p-5 border-rounded">
      <div className="relative z-0 mb-6 w-full group">
<div className="flex items-center mb-4">
    <input  onChange={(event) => handleInputChange(i, event)} checked id={`plan-radio-${i}`} type="radio" value="ppo" name={`plan-radio-${i}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
    <label htmlFor="ppo-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">PPO</label>
</div>
<div className="flex items-center">
    <input  onChange={(event) => handleInputChange(i, event)} id={`plan-radio-${i}`} type="radio" value="hdhp" name={`plan-radio-${i}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
    <label htmlFor="hdhp-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">High Deductible (HSA-eligible)</label>
</div> 

      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input  onChange={(event) => handleInputChange(i, event)} type="number" name="yearlyPrem" id="yearlyPrem" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
          <label htmlFor="yearlyPrem" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Yearly Premium ($) </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input  onChange={(event) => handleInputChange(i, event)} type="number" name="deductible" id="deductible" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
          <label htmlFor="deductible" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deductible ($) </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input  onChange={(event) => handleInputChange(i, event)} type="number" name="oopMax" id="oopMax" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
          <label htmlFor="oopMax" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Out-of-pocket Max</label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input  onChange={(event) => handleInputChange(i, event)} type="number" name="copay" id="copay" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="copay" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Co-insurance Percentage (0-100)</label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-1">
        <div className="relative z-0 mb-6 w-full group">
          <input  onChange={(event) => handleInputChange(i, event)} type="number" name="employerHsaContrib" id="employerHsaContrib" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="employerHsaContrib" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Yearly <b>Employer</b> HSA Contribution</label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input  onChange={(event) => handleInputChange(i, event)} type="number" name="taxSavings" id="taxSavings" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-de peer" placeholder=" " required />
          <label htmlFor="taxSavings" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">HSA-related Tax Savings</label>
        </div>
      </div>
      <div className="btn-box">
        {planOptionsLength !== 1 && <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleRemoveClick}>Remove</button>
}
      </div>
    </div>
                  {planOptionsLength - 1 === i && <button type="button" className="w-full text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " onClick={handleAddClick}>Add</button>
}
      </div>
  );
}