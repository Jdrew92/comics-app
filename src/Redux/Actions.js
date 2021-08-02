

export const setHero = (id)=>{
    return {
        type:'SET_HERO',
        id:id
    }
}

export const setResults = (result)=>{
    return {
        type:'SET_RESULTS',
        result:result
    }   
}

export const setError = (bool)=>{
    return {
        type:'SET_ERROR',
        error:bool
    }
}

export const searchHero = (hero) => {
    return dispatch => {
        dispatch(setError(false))
    fetch("https://www.superheroapi.com/api.php/10226523289976622/search/" + hero)
        .then(res => res.json())
        .then(result => {
            dispatch(setResults(result.results));
        })
        .catch(() => {
            dispatch(setError(true))})
    }
}
