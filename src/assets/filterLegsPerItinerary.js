export const filterLegsPerItinerary = (itinerary, data) => {
  // filter for inbound leg
  const inboundId = itinerary.InboundLegId;
  const inboundFilteredIdLegs = filterLegs(inboundId, data.Legs);

  // filter for outbound leg
  const outboundId = itinerary.OutboundLegId;
  const outboundFilteredIdLegs = filterLegs(outboundId, data.Legs);

  return {
    inboundFilteredIdLegs,
    outboundFilteredIdLegs
  };
};

const filterLegs = (legId, data) => {
  return data.find(element => element.Id === legId);
};
