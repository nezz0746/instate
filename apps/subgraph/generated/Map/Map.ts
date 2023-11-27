// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class LocalRecordDeployed extends ethereum.Event {
  get params(): LocalRecordDeployed__Params {
    return new LocalRecordDeployed__Params(this);
  }
}

export class LocalRecordDeployed__Params {
  _event: LocalRecordDeployed;

  constructor(event: LocalRecordDeployed) {
    this._event = event;
  }

  get tileAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get geohash(): string {
    return this._event.parameters[2].value.toString();
  }

  get account(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class LocalRecordTokenDeployed extends ethereum.Event {
  get params(): LocalRecordTokenDeployed__Params {
    return new LocalRecordTokenDeployed__Params(this);
  }
}

export class LocalRecordTokenDeployed__Params {
  _event: LocalRecordTokenDeployed;

  constructor(event: LocalRecordTokenDeployed) {
    this._event = event;
  }

  get tileAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get geohash(): string {
    return this._event.parameters[1].value.toString();
  }

  get creator(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TileCreated extends ethereum.Event {
  get params(): TileCreated__Params {
    return new TileCreated__Params(this);
  }
}

export class TileCreated__Params {
  _event: TileCreated;

  constructor(event: TileCreated) {
    this._event = event;
  }

  get stateAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get verifier(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get creator(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get baseURI(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Map extends ethereum.SmartContract {
  static bind(address: Address): Map {
    return new Map("Map", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  TILE_CREATOR(): Bytes {
    let result = super.call("TILE_CREATOR", "TILE_CREATOR():(bytes32)", []);

    return result[0].toBytes();
  }

  try_TILE_CREATOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("TILE_CREATOR", "TILE_CREATOR():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  computeLocalRecord(account: Address, geohash: string): Address {
    let result = super.call(
      "computeLocalRecord",
      "computeLocalRecord(address,string):(address)",
      [ethereum.Value.fromAddress(account), ethereum.Value.fromString(geohash)]
    );

    return result[0].toAddress();
  }

  try_computeLocalRecord(
    account: Address,
    geohash: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "computeLocalRecord",
      "computeLocalRecord(address,string):(address)",
      [ethereum.Value.fromAddress(account), ethereum.Value.fromString(geohash)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  computeRecordTileAddress(geohash: string): Address {
    let result = super.call(
      "computeRecordTileAddress",
      "computeRecordTileAddress(string):(address)",
      [ethereum.Value.fromString(geohash)]
    );

    return result[0].toAddress();
  }

  try_computeRecordTileAddress(geohash: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "computeRecordTileAddress",
      "computeRecordTileAddress(string):(address)",
      [ethereum.Value.fromString(geohash)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createState(verifier: Address, baseURI: string): Address {
    let result = super.call(
      "createState",
      "createState(address,string):(address)",
      [ethereum.Value.fromAddress(verifier), ethereum.Value.fromString(baseURI)]
    );

    return result[0].toAddress();
  }

  try_createState(
    verifier: Address,
    baseURI: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createState",
      "createState(address,string):(address)",
      [ethereum.Value.fromAddress(verifier), ethereum.Value.fromString(baseURI)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateStateCall extends ethereum.Call {
  get inputs(): CreateStateCall__Inputs {
    return new CreateStateCall__Inputs(this);
  }

  get outputs(): CreateStateCall__Outputs {
    return new CreateStateCall__Outputs(this);
  }
}

export class CreateStateCall__Inputs {
  _call: CreateStateCall;

  constructor(call: CreateStateCall) {
    this._call = call;
  }

  get verifier(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get baseURI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class CreateStateCall__Outputs {
  _call: CreateStateCall;

  constructor(call: CreateStateCall) {
    this._call = call;
  }

  get tileAddress(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get stateBeacon(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recordTileConfiguration(): InitializeCallRecordTileConfigurationStruct {
    return changetype<InitializeCallRecordTileConfigurationStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get minPrecision(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get maxPrecision(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCallRecordTileConfigurationStruct extends ethereum.Tuple {
  get registry(): Address {
    return this[0].toAddress();
  }

  get accountProxy(): Address {
    return this[1].toAddress();
  }

  get implementation(): Address {
    return this[2].toAddress();
  }
}

export class InitializeERC6551AccountCreatorCall extends ethereum.Call {
  get inputs(): InitializeERC6551AccountCreatorCall__Inputs {
    return new InitializeERC6551AccountCreatorCall__Inputs(this);
  }

  get outputs(): InitializeERC6551AccountCreatorCall__Outputs {
    return new InitializeERC6551AccountCreatorCall__Outputs(this);
  }
}

export class InitializeERC6551AccountCreatorCall__Inputs {
  _call: InitializeERC6551AccountCreatorCall;

  constructor(call: InitializeERC6551AccountCreatorCall) {
    this._call = call;
  }

  get registry(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get accountProxy(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get implementation(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeERC6551AccountCreatorCall__Outputs {
  _call: InitializeERC6551AccountCreatorCall;

  constructor(call: InitializeERC6551AccountCreatorCall) {
    this._call = call;
  }
}

export class InitializeRecordTileFactoryCall extends ethereum.Call {
  get inputs(): InitializeRecordTileFactoryCall__Inputs {
    return new InitializeRecordTileFactoryCall__Inputs(this);
  }

  get outputs(): InitializeRecordTileFactoryCall__Outputs {
    return new InitializeRecordTileFactoryCall__Outputs(this);
  }
}

export class InitializeRecordTileFactoryCall__Inputs {
  _call: InitializeRecordTileFactoryCall;

  constructor(call: InitializeRecordTileFactoryCall) {
    this._call = call;
  }

  get config(): InitializeRecordTileFactoryCallConfigStruct {
    return changetype<InitializeRecordTileFactoryCallConfigStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class InitializeRecordTileFactoryCall__Outputs {
  _call: InitializeRecordTileFactoryCall;

  constructor(call: InitializeRecordTileFactoryCall) {
    this._call = call;
  }
}

export class InitializeRecordTileFactoryCallConfigStruct extends ethereum.Tuple {
  get registry(): Address {
    return this[0].toAddress();
  }

  get accountProxy(): Address {
    return this[1].toAddress();
  }

  get implementation(): Address {
    return this[2].toAddress();
  }
}

export class MoveCall extends ethereum.Call {
  get inputs(): MoveCall__Inputs {
    return new MoveCall__Inputs(this);
  }

  get outputs(): MoveCall__Outputs {
    return new MoveCall__Outputs(this);
  }
}

export class MoveCall__Inputs {
  _call: MoveCall;

  constructor(call: MoveCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get state(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get geohash(): string {
    return this._call.inputValues[2].value.toString();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class MoveCall__Outputs {
  _call: MoveCall;

  constructor(call: MoveCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
