import axios from 'axios';

export const getLocation = async (search) => {
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
    params: { query: search ? search : 'Nusa Dua Bali' },
    headers: {
      'X-RapidAPI-Key': '0598613c52msha7ed4913e26d0d7p1720cajsnaf17581b23e6',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
  };

  const res = axios
    .request(options)
    .then(function (response) {
      let respLocation = response.data?.data?.Typeahead_autocomplete?.results[0];

      return {
        documentId: respLocation.documentId,
        locationId: respLocation.detailsV2?.locationId,
        placeType: respLocation.detailsV2?.placeType,
        names: {
          name: respLocation.detailsV2?.names?.name,
          longOnlyHierarchyTypeaheadV2: respLocation.detailsV2?.names?.longOnlyHierarchyTypeaheadV2,
        },
        geocode: {
          latitude: respLocation.detailsV2?.geocode?.latitude,
          longitude: respLocation.detailsV2?.geocode?.longitude,
        },
      };
    })
    .catch(function (error) {
      console.error(error);
    });
  return res;
};

export const getHotel = async ({ locationId }) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/hotels/get-details',
      params: { location_id: locationId },
      headers: {
        'X-RapidAPI-Key': '0598613c52msha7ed4913e26d0d7p1720cajsnaf17581b23e6',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    };

    const res = axios
      .request(options)
      .then(function (response) {
        const resp = response.data?.data;
        console.log('🚀 ~ file: getApi.js ~ line 55 ~ resp', resp);
        let newRes = [];
        for (let item of resp) {
          newRes.push({
            location_id: item.location_id,
            name: item.name,
            latitude: item.latitude,
            longitude: item.longitude,
            num_reviews: item.num_reviews,
            location_string: item.location_string,
            images: {
              original: {
                url: item.photo?.images?.original?.url,
              },
              large: {
                url: item.photo?.images?.large?.url,
              },
            },
            ranking: item.ranking,
            rating: item.rating,
            price: item.price,
            hotel_class: item.hotel_class,
            description: item.description,
            address: item.address,
          });
        }
        return newRes;
      })
      .catch(function (error) {
        console.error(error);
      });

    return res;
  } catch (err) {
    console.log(err);
  }
};
