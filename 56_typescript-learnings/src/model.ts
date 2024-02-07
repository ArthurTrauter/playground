let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();

type Cost = number | string;

let originalCost: Cost = 425;
originalCost = "A lot of money!";

enum InventoryItemType {
    Computer = "computer",
    furniture = "furniture"
}

interface InventoryItem {
    displayName: string;
    inventoryType: "computer" | "furniture";
    readonly trackingNumber: string;
    createDate: Date;
    originalCost?: number;
    addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;
}

function saveInventoryItem(item: InventoryItem) {
    
}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem({
    displayName: "MacBook Pro 15 Retina",
    inventoryType: "computer",
    trackingNumber: "MBP123456",
    createDate: new Date(),
    originalCost: 1499
});