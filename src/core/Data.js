import WWW from "../base/WWW.js";

export default class Data {
  static async getCharityList() {
    return await WWW.tsv("/dhaana/data/sl.charities.tsv");
  }
}
