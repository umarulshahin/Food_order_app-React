import React from "react";
import "./App.css";
const Header=()=>{
  return(
    <div className="header">

      <div className="logo_container">
        <img className="logo"  src="https://i.fbcd.co/products/resized/resized-750-500/3432-7c317862e42850656d0a17cc9352c9cf250b864fd63abcecc3bde6775644bca5.jpg"/>
      </div>

      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul> 
      </div>

    </div>

  )
}

const RestaurantCard=(props)=>{
  const{
    resdata
  }=props

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla

  }=resdata?.info
  return (

    <div className="res_card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res_logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resdata.info.cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}minites</h4>

    </div>

  )
}

const resList=[
  {
      "info": {
          "id": "788303",
          "name": "Wow! Momo",
          "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
          "locality": "Near Shanti Nagar Bus Stop",
          "areaName": "Shantinagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Tibetan",
              "Healthy Food",
              "Asian",
              "Chinese",
              "Snacks",
              "Continental",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.4,
          "parentId": "1776",
          "avgRatingString": "4.4",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-04 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/wow-momo-near-shanti-nagar-bus-stop-shantinagar-bangalore-788303",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "10575",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Shanti Nagar",
          "areaName": "Shanti Nagar",
          "costForTwo": "₹600 for two",
          "cuisines": [
              "Pizzas"
          ],
          "avgRating": 4.2,
          "parentId": "721",
          "avgRatingString": "4.2",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-05 01:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-shanti-nagar-bangalore-10575",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "472792",
          "name": "Great Indian Khichdi by EatFit",
          "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
          "locality": "LASKAR HOSUR ROAD",
          "areaName": "ADUGODI",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Home Food",
              "Indian",
              "Healthy Food",
              "Snacks",
              "Desserts",
              "Rajasthani",
              "South Indian",
              "Maharashtrian",
              "Sweets"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "319582",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 55,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-05 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ],
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-laskar-hosur-road-adugodi-bangalore-472792",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "622202",
          "name": "MOJO Pizza - 2X Toppings",
          "cloudinaryImageId": "59b64f9bb67234987652437f21d379c2",
          "locality": "Langford Road",
          "areaName": "Shantinagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Pizzas",
              "Italian",
              "Fast Food",
              "Desserts"
          ],
          "avgRating": 4.6,
          "parentId": "11329",
          "avgRatingString": "4.6",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25-35 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-05 02:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-langford-road-shantinagar-bangalore-622202",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "77949",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Gandhi Bazar",
          "areaName": "Basavanagudi",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Burgers",
              "American"
          ],
          "avgRating": 4.2,
          "parentId": "166",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-04 23:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-gandhi-bazar-basavanagudi-bangalore-77949",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "432976",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG",
          "locality": "Double Road",
          "areaName": "Shanti Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
          ],
          "avgRating": 4.3,
          "parentId": "547",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-04 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/kfc-double-road-shanti-nagar-bangalore-432976",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "424558",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "mocil3npmwpcdcfaxql1",
          "locality": "Gandhi Bazaar Main Road",
          "areaName": "Basavanagudi",
          "costForTwo": "₹220 for two",
          "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "4961",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-05 00:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹699",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-gandhi-bazaar-main-road-basavanagudi-bangalore-424558",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "23846",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
          "locality": "Rehinus Street",
          "areaName": "Richmond Town",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "2456",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-05 02:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Pizza.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/dominos-pizza-rehinus-street-richmond-town-bangalore-23846",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "86443",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
          "locality": "Pulikeshi Nagar",
          "areaName": "Frazer Town",
          "costForTwo": "₹120 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "6249",
          "avgRatingString": "4.7",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 5.9,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "5.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-04 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ],
              "textExtendedBadges": [
                  {
                      "iconId": "Ratnesh_Badges/test2.png",
                      "shortDescription": "Perfect ice cream delivery",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "Ratnesh_Badges/test2.png",
                                  "shortDescription": "Perfect ice cream delivery"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹169"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/nic-ice-creams-pulikeshi-nagar-frazer-town-bangalore-86443",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "697144",
          "name": "Baskin Robbins - Ice Cream Desserts",
          "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
          "locality": "GARUDA MALL",
          "areaName": "MAGARATH ROAD",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Desserts",
              "Ice Cream"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "5588",
          "avgRatingString": "4.6",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 3.8,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "3.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-04 23:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                      "shortDescription": "Perfect cake delivery",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                                  "shortDescription": "Perfect cake delivery"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-garuda-mall-magarath-road-bangalore-697144",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "570511",
          "name": "Bakingo",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/a96b7994-f501-41ce-961d-801e3198cde1_570511.JPG",
          "locality": "Vasanth Nagar",
          "areaName": "6th Main Road",
          "costForTwo": "₹299 for two",
          "cuisines": [
              "Bakery",
              "Desserts",
              "Beverages",
              "Snacks"
          ],
          "avgRating": 4.6,
          "parentId": "3818",
          "avgRatingString": "4.6",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 4.4,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "4.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-05 01:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                      "shortDescription": "Perfect cake delivery",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                                  "shortDescription": "Perfect cake delivery"
                              }
                          }
                      ]
                  }
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/bakingo-vasanth-nagar-6th-main-road-bangalore-570511",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "750396",
          "name": "Daily Kitchen - Homely Meals",
          "cloudinaryImageId": "f3712f78feb56ca2f11ba6dcacd54521",
          "locality": "Lakshmi Road",
          "areaName": "Langford Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Home Food",
              "Indian",
              "North Indian",
              "Thalis"
          ],
          "avgRating": 4.3,
          "parentId": "444382",
          "avgRatingString": "4.3",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "18-28 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-05 02:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹110"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-lakshmi-road-langford-road-bangalore-750396",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "503002",
          "name": "NH1 Bowls - Highway To North",
          "cloudinaryImageId": "94654fdf308764cd0faf83dba35bcdc3",
          "locality": "Lakshmi Road",
          "areaName": "Shanti Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "North Indian",
              "Punjabi",
              "Home Food"
          ],
          "avgRating": 4.6,
          "parentId": "22452",
          "avgRatingString": "4.6",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "17-27 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-05 02:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹110"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-lakshmi-road-shanti-nagar-bangalore-503002",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "688434",
          "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
          "cloudinaryImageId": "7e526a0c0ed3cd56eefac3d318c78977",
          "locality": "WEST PORTION",
          "areaName": "Shanthinagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Desserts",
              "Ice Cream",
              "Ice Cream Cakes"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "582",
          "avgRatingString": "4.5",
          "totalRatingsString": "50+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 1.1,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-04 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-west-portion-shanthinagar-bangalore-688434",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "29673",
          "name": "Natural Ice Cream",
          "cloudinaryImageId": "on12tk5aqza0stxxsqhc",
          "locality": "St. Marks Road",
          "areaName": "Central Bangalore",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.7,
          "parentId": "2093",
          "avgRatingString": "4.7",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-05 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/natural-ice-cream-st-marks-road-central-bangalore-bangalore-29673",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "146304",
          "name": "Hyderabad Biryaani House",
          "cloudinaryImageId": "taavokxehqfaugbzzhzk",
          "locality": "Victoria Road",
          "areaName": "Ashok Nagar",
          "costForTwo": "₹499 for two",
          "cuisines": [
              "Indian"
          ],
          "avgRating": 4.3,
          "parentId": "2403",
          "avgRatingString": "4.3",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 3.5,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-04 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "ABOVE ₹800",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/hyderabad-biryaani-house-victoria-road-ashok-nagar-bangalore-146304",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "17376",
          "name": "Glen's Bakehouse",
          "cloudinaryImageId": "m6jahioyu7zrodei5pcq",
          "locality": "Lavelle Road",
          "areaName": "Ashok Nagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "Desserts",
              "Bakery",
              "Beverages",
              "Continental",
              "Italian"
          ],
          "avgRating": 4.6,
          "parentId": "3220",
          "avgRatingString": "4.6",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-04 23:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Gourmet.png",
                      "description": "Delivery!"
                  }
              ],
              "textExtendedBadges": [
                  {
                      "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                      "shortDescription": "Perfect cake delivery",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Gourmet.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                                  "shortDescription": "Perfect cake delivery"
                              }
                          }
                      ]
                  }
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/glens-bakehouse-lavelle-road-ashok-nagar-bangalore-17376",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "41105",
          "name": "Nandhini Deluxe",
          "cloudinaryImageId": "zmp84ckarixkz73fzuws",
          "locality": "Kadubisanahalli",
          "areaName": "Basavanagudi",
          "costForTwo": "₹550 for two",
          "cuisines": [
              "Andhra",
              "Chinese"
          ],
          "avgRating": 4.3,
          "parentId": "2451",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-05 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/nandhini-deluxe-kadubisanahalli-basavanagudi-bangalore-41105",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "502999",
          "name": "BOX8 - Desi Meals",
          "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
          "locality": "Lakshmi Road",
          "areaName": "Shanti Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "North Indian",
              "Biryani",
              "Thalis",
              "Home Food"
          ],
          "avgRating": 4.5,
          "parentId": "10655",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "24-34 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-05 02:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/box8-desi-meals-lakshmi-road-shanti-nagar-bangalore-502999",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "34535",
          "name": "New Shanthi Sagar(Old) - Hosahalli Metro Station",
          "cloudinaryImageId": "wb87kmauijzf62dlnmnv",
          "locality": "Chord Road",
          "areaName": "Vijayanagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Chinese",
              "Desserts",
              "Jain",
              "North Indian",
              "South Indian"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "472499",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 6.6,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "6.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-05-04 22:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹749",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/new-shanthi-sagar-old-hosahalli-metro-station-chord-road-vijayanagar-bangalore-34535",
          "type": "WEBLINK"
      }
  }
]

const Body=()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
        <div className="res_container">
         
          {
            resList.map((restaurant)=>(
              < RestaurantCard key={restaurant.info.id} resdata={restaurant} />
            ))
          };


        </div>
    </div>

  )
}
const AppLayout=()=>{
  return (
    <div>
      < Header />
      <Body />

    </div>
  );
};

export default AppLayout

