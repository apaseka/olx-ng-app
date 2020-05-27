import DateTimeFormat = Intl.DateTimeFormat;

interface Image {

  image: string;
}

export interface Advertisement {

  id: number;
  externalId2: string;
  itemDescription: string;
  url: string;
  priceUAH: number;
  price: string;
  advTitle: string;

  location: string;
  publishedGadget: string;
  publishedDate: string;
  advCategoryAndOther: string;
  viewsNumber: number;
  images: Image[];
  mainImage: string;

  parsingDate: string;
  olxDate: string;
  timeInOlx: string;
  searchingUrl: string;
  averageViewsPerDay: number;
}
