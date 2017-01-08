export const scouts = (state = {scouts: []}, action) => {

  switch(action.type) {
    case ADD_SCOUT:
      Object.assign({}, state, {scouts: []})
  }

}

export const ADD_SCOUT = '[Scout] add';
export const UPDATE_SCOUT = '[Scout] update';
export const DELETE_SCOUT = '[Scout] delete';
