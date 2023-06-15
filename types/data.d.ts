declare namespace Data {
  declare namespace PageData {
    interface IndexPageData {
      status: string;
      cryptoData: CryptoData;
    }

    interface SlugPageData {
      status: string;
      crypto: Crypto;
    }
  }

  interface CryptoData {
    data: Datas;
  }

  interface Datas {
    stats: Stats;
    coins: Coin[];
  }

  interface Stats {
    total: number;
    total24hVolume: string;
    totalCoins: number;
    totalExchanges: number;
    totalMarketCap: string;
    totalMarkets: number;
  }

  interface Coin {
    uuid: string;
    symbol: string;
    name: string;
    color: string;
    iconUrl: string;
    marketCap: string;
    price: string;
    listedAt: number;
    tier: number;
    change: string;
    rank: number;
    sparkline: string[];
    lowVolume: boolean;
    coinrankingUrl: string;
    "24hVolume": string;
    btcPrice: string;
  }

  interface Crypto {
    data: Coins;
  }

  interface Coins {
    coin: CoinDetails;
  }

  interface CoinDetails {
    coin: any;
    uuid: string;
    symbol: string;
    name: string;
    description: string;
    color: string;
    iconUrl: string;
    websiteUrl: string;
    links: Link[];
    supply: Supply;
    numberOfMarkets: number;
    numberOfExchanges: number;
    "24hVolume": string;
    marketCap: string;
    fullyDilutedMarketCap: string;
    price: string;
    btcPrice: string;
    priceAt: number;
    change: string;
    rank: number;
    sparkline: string[];
    allTimeHigh: AllTimeHigh;
    coinrankingUrl: string;
    tier: number;
    lowVolume: boolean;
    listedAt: number;
    hasContent: boolean;
    notices: any;
    tags: string[];
  }

  interface Link {
    name: string;
    url: string;
    type: string;
  }

  interface Supply {
    confirmed: boolean;
    supplyAt: number;
    max: any;
    total: string;
    circulating: string;
  }

  interface AllTimeHigh {
    price: string;
    timestamp: number;
  }

  interface LoginUserParams {
    email: string;
    password: string;
  }

  interface IUser {
    _id?: string;
    email: string;
    fullName: string;
  }

  interface InitialState {
    value: AuthState;
  }

  interface AuthState {
    showModal: boolean
  }
}

export = Data;
