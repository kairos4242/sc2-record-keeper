import React, { useState } from "react";
import Race from "./Race";

export default function AddDataButton(props) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="add-data-modal">
            <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            type="button" 
            onClick={() => setShowModal(true)}
            >
                Add Data
            </button>
            {showModal ? (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={() => setShowModal(false)}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add a match</h3>
                            <form className="space-y-6" action="#" onSubmit={(event) => {
                                props.parentCallback(
                                    {
                                        id: 0,
                                        name: "111",
                                        clan: "111",
                                        race: Race.TERRAN,
                                        matches: [],
                                        notes: ""
                                    }
                                )
                                setShowModal(false)
                                event.preventDefault()
                                }
                                }>
                                <div>
                                    <label for="opp-clan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Clan</label>
                                    <input type="text" name="opp-clan" id="opp-clan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="OIGE"/>
                                </div>
                                <div>
                                    <label for="opp-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                    <input type="text" name="opp-name" id="opp-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Camelot" required/>
                                </div>
                                <div>
                                    <label for="opp-race" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Race</label>
                                    <select name="opp-race" id="opp-race" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" >
                                        <option value="Terran">Terran</option>
                                        <option value="Protoss">Protoss</option>
                                        <option value="Zerg">Zerg</option>
                                        <option value="Random">Random</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="opp-build" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Build</label>
                                    <input type="text" name="opp-build" id="opp-build" placeholder="2-1-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                </div>
                                <div>
                                    <label for="opp-notes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Notes</label>
                                    <input type="text" name="opp-notes" id="opp-notes" placeholder="Worst player ever" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                </div>
                                <button type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            ) : null}
        </div>   
    )
  }