const setData = (type: string, content: any) => {
    return {
        type: type,
        content: content
    }
}

const appendData = (type: string,content: any) => {
    return (dispatch:any) => {
        dispatch(setData(type,content));
    }
}

export default appendData;