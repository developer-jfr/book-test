export type BookType = {
  accessInfo: AccesInfo
  etag: string;
  id: string;
  kind: string;
  saleInfo: SaleInfo
  searchInfo: { textSnippet: string };
  selfLink: string
  volumeInfo: VolumeInfoType
};

type AccesInfo = {
  accessViewStatus: string;
  country: string;
  embeddable: string;
  epub: { isAvailable: boolean };
  pdf: {
    acsTokenLink: string;
    isAvailable: boolean;
  };
  publicDomain: boolean;
  quoteSharingAllowed: boolean;
  textToSpeechPermission: string;
  viewability: string;
  webReaderLink: string;
};

type VolumeInfoType = {
  allowAnonLogging: boolean
authors: Array<string>
canonicalVolumeLink: string
categories: Array<string>
contentVersion: string
description: string
imageLinks: {smallThumbnail: string; thumbnail: string}

infoLink: string
language: string
maturityRating:string
pageCount: number
panelizationSummary: {containsEpubBubbles: boolean, containsImageBubbles: boolean}
previewLink: string
printType: string
publishedDate:string
publisher: string
readingModes: {text: boolean, image: boolean}
subtitle: string
title: string
}

type SaleInfo = {
  buyLink: string
country: string
isEbook: boolean
listPrice: {amount: number, currencyCode: string}
retailPrice: {amount: number, currencyCode: string}
saleability:string
}

type ImageLink = {
  smallThumbnail: string;
  thumbnail: string;
};

export type SearchType = {
  term: string;
  categiries: string;
  sort: string;
};
