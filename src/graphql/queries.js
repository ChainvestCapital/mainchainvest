/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProjekt = /* GraphQL */ `
  query GetProjekt($id: ID!) {
    getProjekt(id: $id) {
      id
      name
      Kategorie
      Finanzierungsvolumen
      ErwRendite
      Mindestinvestition
      Typ
      TitleLink
      LogoLink
      KurzBeschreibung
      KategorieBildLink
      InternerLink
      ExternerLink
      Help
      Blockchain
      Anbieter
      Behoerde
      Gruendung
      Emissionszeitraum
      WpPG
      Rechtsform
      Geschaeftstaetigkeit
      Ort
      Firmenname
      Emittent
      Rechtliche_Bezeichnung
      Zahlungsmoeglichkeiten
      Token_Ticker
      Max_Token_Anzahl
      ISIN
      ITIN
      createdAt
      updatedAt
    }
  }
`;
export const listProjekts = /* GraphQL */ `
  query ListProjekts(
    $filter: ModelProjektFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjekts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Kategorie
        Finanzierungsvolumen
        ErwRendite
        Mindestinvestition
        Typ
        TitleLink
        LogoLink
        KurzBeschreibung
        KategorieBildLink
        InternerLink
        ExternerLink
        Help
        Blockchain
        Anbieter
        Behoerde
        Gruendung
        Emissionszeitraum
        WpPG
        Rechtsform
        Geschaeftstaetigkeit
        Ort
        Firmenname
        Emittent
        Rechtliche_Bezeichnung
        Zahlungsmoeglichkeiten
        Token_Ticker
        Max_Token_Anzahl
        ISIN
        ITIN
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
