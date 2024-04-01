export const getDataWithNamesAndAvatars = (rawData: any[], domains: any[], socials: any[]) => {
  const addressToProfile: any = mapAddressToProfile(domains);
  const addressToSocial: any = mapAddressToSocial(socials);
  const dataWithNamesAndAvatars = rawData.map((item) => {
    const social = addressToSocial[item.buyer];
    const profile = addressToProfile[item.buyer];
    return {
      ...item,
      profileName: social?.profileName || profile?.name,
      profileImage: social?.profileImage || profile?.avatar,
      profileUrl: social?.profileUrl,
    };
  });
  return dataWithNamesAndAvatars;
};

const mapAddressToProfile = (domains: any) => {
  const addressToProfile: any = {};
  domains.forEach((domain: any) => {
    addressToProfile[domain.resolvedAddress] = {
      name: domain.name,
      avatar: domain.avatar,
    };
  });
  return addressToProfile;
};

const mapAddressToSocial = (socials: any) => {
  const addressToSocial: any = {};
  socials.forEach((social: any) => {
    social.userAssociatedAddresses.forEach((address: any) => {
      addressToSocial[address] = {
        profileName: social.profileName,
        profileImage: social.profileImage,
        profileUrl: social.profileUrl,
      };
    });
  });
  return addressToSocial;
};
