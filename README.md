# setup actions

simple implementation of setup actions for zora's create Tool using

- `@zoralabs/protocol-sdk`
- `viem`

<img width="1440" alt="Screenshot 2024-03-16 at 8 03 33 PM" src="https://github.com/SweetmanTech/viem-transfers/assets/23249402/7316614b-0951-4590-a35e-ff901518e8fd">

## Key Components

- `@/components/GenerateButton`: UI component to create setup actions.

## Setup Actions

- `@/lib/zora/getSetupActions`: call to get array of the following setup actions.
- `@/lib/zora/getSetupNewTokenCall`: call for `setupNewToken`.
- `@/lib/zora/getUpdateTokenURICall`: call for `updateTokenURI`.
- `@/lib/zora/getUpdateRoyaltiesForTokenCall`: call for `updateRoyaltiesForToken`.
- `@/lib/zora/getCallSaleCall`: call for `callSale`.
- `@/lib/zora/getSetSaleCall`: call for `setSale` to setup the sale.
- `@/lib/zora/getMinterPermissionCall`: call for `addPermission` with minter role.
- `@/lib/zora/getAdminMintCall`: call for `adminMint`.

## Authors

- [@sweetmantech](https://github.com/sweetmantech) ([warpcast](https://warpcast.com/sweetman-eth))

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
