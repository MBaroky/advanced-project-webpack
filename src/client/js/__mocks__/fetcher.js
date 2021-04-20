const fetcher = (formText) => {
    if( formText === 'google.com'){
        return Promise.resolve({ error: 'url is not allowed' })
    }else{
        return Promise.resolve({ status: 200 });
    }
  };

  exports.fetcher = fetcher;