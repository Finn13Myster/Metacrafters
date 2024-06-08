let nftCollection = [];

function mintNFT(name, creator, description, date) {

    const nft = {
        name: name,
        creator: creator,
        description: description,
        date: date
    };

    nftCollection.push(nft);
}
function listNFTs() {

    nftCollection.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Creator: ${nft.creator}`);
        console.log(`Description: ${nft.description}`);
        console.log(`Date: ${nft.date}`);
        console.log('---');
    });
}

function getTotalSupply() {
    return nftCollection.length;
}

mintNFT('The Unforgiven', 'Yasuo', 'the stained blade of the unforgiven', '2024-03-13');
mintNFT('The last Jedi', 'Cal Cestus', 'the Lightsaber of the last survivor of Order 66', '2024-06-08');
mintNFT('The Unkillable Demon King', 'Faker', 'The Legacy of Faker cementing to the rift', '2024-05-17');
mintNFT('The blade of the ruined king', 'Viego', 'The Kings broken heart stabbed by his own beloved', '2023-01-09');

listNFTs();

console.log(`Total NFTs minted: ${getTotalSupply()}`);
