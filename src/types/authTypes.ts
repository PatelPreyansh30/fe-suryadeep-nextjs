export interface LoginInputType {
  username: string;
  password: string;
}

export interface MasterSocietyDetailType {
  society_id: number;
  society_name: string;
  society_address: string;
  society_registration_code: string;
  society_registration_date: string;
  society_mobile: string;
}

export interface MasterMemberDetailType {
  member_id: number;
  member_name: string;
  member_email: string | null;
  member_mobile: string;
  member_alternative_mobile: string | null;
  member_business: string;
  member_death_date: string | null;
}

export interface MasterNomineeDetailType {
  nominee_id: number;
  nominee_name: string;
  created_at: string;
  updated_at: string;
  apartment: number;
}

export interface MasterTransferDetailType {
  transfer_id: number;
  transfer_date: string;
  created_at: string;
  updated_at: string;
  apartment: number;
}

export interface MasterBankDetailType {
  bank_id: number;
  bank_name: string;
  bank_ifsc: string;
  bank_address: string;
  created_at: string;
  updated_at: string;
  apartment: number;
}

export interface MemberDetailType {
  apartment_id: number;
  apartment_number: string;
  apartment_alloted_date: string | null;
  apartment_transfer_date: string | null;
  apartment_address: string;
  member: MasterMemberDetailType;
  society: MasterSocietyDetailType;
  nominee: MasterNomineeDetailType[];
  transfer: MasterTransferDetailType[];
  bank: MasterBankDetailType[];
}
