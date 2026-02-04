CREATE TABLE `audit_logs` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`action` text NOT NULL,
	`target` text NOT NULL,
	`timestamp` integer NOT NULL,
	`details` text,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `user` ADD `role` text DEFAULT 'Viewer' NOT NULL;