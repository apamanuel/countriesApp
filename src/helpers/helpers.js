export const formatCountry = (country)=>{
    return{
        code: country.code,
        name: country.name,
        continent: country.continent.name,
        currency: country.currency,
        languages: country.languages?.map(language => language?.name).join(','),
    }

};