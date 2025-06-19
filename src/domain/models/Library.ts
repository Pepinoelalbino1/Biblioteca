export interface Library {
  id: string;
  name: string;
  location: string;
  type: LibraryType;
  operatingHours: OperatingHours;
  contactInfo: ContactInfo;
  capacity: number;
  status: LibraryStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum LibraryType {
  Public = 'PUBLIC',
  Academic = 'ACADEMIC',
  Private = 'PRIVATE',
  Specialized = 'SPECIALIZED'
}

export enum LibraryStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Maintenance = 'MAINTENANCE'
}

export interface OperatingHours {
  monday: TimeSlot;
  tuesday: TimeSlot;
  wednesday: TimeSlot;
  thursday: TimeSlot;
  friday: TimeSlot;
  saturday: TimeSlot;
  sunday: TimeSlot;
}

export interface TimeSlot {
  open: string;
  close: string;
  isClosed: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website?: string;
}