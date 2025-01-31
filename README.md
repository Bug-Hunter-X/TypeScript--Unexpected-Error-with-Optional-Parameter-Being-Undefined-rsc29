# TypeScript: Handling Undefined in Optional Parameters

This repository demonstrates a common TypeScript error related to optional parameters that might be undefined, even when explicitly checking for null.  The `printName` function is designed to handle null values gracefully but throws an error when an undefined value is passed.

## Problem

The `printName` function checks if the `name` parameter is null. However, it doesn't handle the `undefined` case, leading to a TypeScript compile-time error, even though the logic seems sound at first glance.

## Solution

The solution involves explicitly checking for both null and undefined using the nullish coalescing operator (`??`) or a more comprehensive type guard.