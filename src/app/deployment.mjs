// This value is frozen by next.config.js at build time. Enabling the migration
// requires a new deployment; publishing CMS drafts cannot bypass this switch.
export function isNavigationMigrationEnabled() {
  return process.env.SITE_NAVIGATION_MIGRATION_ENABLED === "true";
}
