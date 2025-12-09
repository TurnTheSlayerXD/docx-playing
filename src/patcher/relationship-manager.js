"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendRelationship = exports.getNextRelationshipIndex = void 0;
var util_1 = require("./util");
var getIdFromRelationshipId = function (relationshipId) {
    var output = parseInt(relationshipId.substring(3), 10);
    return isNaN(output) ? 0 : output;
};
var getNextRelationshipIndex = function (relationships) {
    var relationshipElements = (0, util_1.getFirstLevelElements)(relationships, "Relationships");
    return (relationshipElements
        .map(function (e) { var _a, _b, _c; return getIdFromRelationshipId((_c = (_b = (_a = e.attributes) === null || _a === void 0 ? void 0 : _a.Id) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : ""); })
        .reduce(function (acc, curr) { return Math.max(acc, curr); }, 0) + 1);
};
exports.getNextRelationshipIndex = getNextRelationshipIndex;
var appendRelationship = function (relationships, id, type, target, targetMode) {
    var relationshipElements = (0, util_1.getFirstLevelElements)(relationships, "Relationships");
    // eslint-disable-next-line functional/immutable-data
    relationshipElements.push({
        attributes: {
            Id: "rId".concat(id),
            Type: type,
            Target: target,
            TargetMode: targetMode,
        },
        name: "Relationship",
        type: "element",
    });
    return relationshipElements;
};
exports.appendRelationship = appendRelationship;
