import { ObjectType, Field } from 'type-graphql';
@ObjectType()
export class Summary {
    @Field()
    zipCode!: string;
    @Field()
    type!: string;
    @Field()
    keywords!: number;
    @Field()
    id!: number;
    @Field()
    isCallLink!: number;
    @Field()
    x!: number;
    @Field()
    y!: number;
    @Field()
    posExact!: boolean;
    @Field()
    hasNaverTalktalkUrl!: boolean;
    @Field()
    hasNaverBooking!: boolean;
    @Field()
    isSite!: boolean;
    // @Field()
    // entranceCoords!: null;
    // @Field()
    // broadcastInfo!: null;
    // @Field()
    // insidePanorama!: null;
    // @Field()
    // indoorPanorama!: null;
    // @Field()
    // petrolInfo!: null;
    // @Field()
    // naverbookingId!: null;
    // @Field()
    // bizHour!: null;
    // @Field()
    // michelinGuide!: null;
    // @Field()
    // bizhourInfo!: null;
    // @Field()
    // interiorPanorama!: null;
    // @Field()
    // menus!: null;
    @Field()
    ktCallMd!: string;
    @Field()
    roadZipCode!: string;
    @Field()
    rCode!: string;
    @Field()
    addressAbbr!: string;
    @Field()
    displayCategory!: string;
    @Field()
    ppc!: string;
    @Field()
    address!: string;
    @Field()
    fullRoadAddress!: string;
    @Field()
    markerSelected!: string;
    @Field()
    category!: string;
    @Field()
    phone!: string;
    @Field()
    marker!: string;
    @Field()
    name!: string;
    @Field()
    fullAddress!: string;
    @Field()
    adult!: string;
    @Field()
    updateDate!: string;
    // @Field()
    // theme!: {};
    // @Field()
    // roadAddr!: [];
    // @Field()
    // options!: [];
    // @Field()
    // images!: [];
    // @Field(type => [])
    // menuImages!: Array<any>;
    // @Field()
    // previewImages!: [];
    @Field(type => [String])
    categoryPaths!: Array<string>;
    @Field(type => [String])
    categories!: Array<string>;
    // @Field()
    // skyPanorama!: [];
    // @Field(type => MarketLabel)
    // markerLabel!: MarketLabel;
    // @Field()
    // streetPanorama!: [];
    // @Field()
    // urlList!: [];
}
