function reducerEmployee(state = {
                    empDetails:[ {id: "emp1", name: "jaanu", designation: "lecturer", subjecct: "DLD"},
                        {id: "emp1", name: "jaanu", designation: "lecturer", subjecct: "DLD"},
                        {id: "emp1", name: "jaanu", designation: "lecturer", subjecct: "DLD"},
                        {id: "emp1", name: "jaanu", designation: "lecturer", subjecct: "DLD"}]
                         }, action) {

// var employees = {...state};

if (action.type === 'EMPDATA'){
    return state;                            
}
return state;  
    }
export default reducerEmployee;