// Define Enum
enum Role {
    Admin,
    Editor,
    Guest
}

//Record Mapping
const PermissionMap: Record<Role, boolean> = {
    [Role.Admin]: true,
    [Role.Editor]: true,
    [Role.Guest]: false,
};

console.log