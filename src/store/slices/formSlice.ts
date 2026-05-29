import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ContactFormState {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  programField: string;
  targetIntake: string;
  isInsideCanada: string; // 'In Canada' | 'Out of Canada'
  message: string;
}

export interface BookingFormState {
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  currentResidence: string;
  highestEducation: string;
  programField: string;
  preferredIntake: string;
  tuitionBudget: string;
  isInsideCanada: string; // 'Yes' | 'No'
  preferredFormat: string;
  appointmentDate: string;
  preferredTimeframe: string;
}

interface FormState {
  contact: ContactFormState;
  booking: BookingFormState;
  contactSubmitted: boolean;
  bookingSubmitted: boolean;
  contactLoading: boolean;
  bookingLoading: boolean;
  errors: Record<string, string>;
}

const initialContactState: ContactFormState = {
  fullName: '',
  phone: '',
  email: '',
  location: '',
  programField: 'Business & Corporate Management',
  targetIntake: 'Fall 2026',
  isInsideCanada: 'Out of Canada',
  message: '',
};

const initialBookingState: BookingFormState = {
  fullName: '',
  phone: '',
  whatsapp: '',
  email: '',
  currentResidence: '',
  highestEducation: '',
  programField: 'Business, Operations & Corporate Management',
  preferredIntake: 'Fall Intake (September)',
  tuitionBudget: '$15k–$20k CAD',
  isInsideCanada: 'No',
  preferredFormat: 'Secure Zoom Video',
  appointmentDate: '',
  preferredTimeframe: 'Morning (9:00 AM - 12:00 PM)',
};

const initialState: FormState = {
  contact: initialContactState,
  booking: initialBookingState,
  contactSubmitted: false,
  bookingSubmitted: false,
  contactLoading: false,
  bookingLoading: false,
  errors: {},
};

export const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    updateContactField: (
      state,
      action: PayloadAction<{ field: keyof ContactFormState; value: string }>
    ) => {
      state.contact[action.payload.field] = action.payload.value;
      if (state.errors[action.payload.field]) {
        delete state.errors[action.payload.field];
      }
    },
    updateBookingField: (
      state,
      action: PayloadAction<{ field: keyof BookingFormState; value: string }>
    ) => {
      state.booking[action.payload.field] = action.payload.value;
      if (state.errors[action.payload.field]) {
        delete state.errors[action.payload.field];
      }
    },
    setErrors: (state, action: PayloadAction<Record<string, string>>) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = {};
    },
    submitContactStart: (state) => {
      state.contactLoading = true;
    },
    submitContactSuccess: (state) => {
      state.contactLoading = false;
      state.contactSubmitted = true;
      state.errors = {};
    },
    submitContactFailure: (state, action: PayloadAction<Record<string, string>>) => {
      state.contactLoading = false;
      state.errors = action.payload;
    },
    submitContactReset: (state) => {
      state.contact = initialContactState;
      state.contactSubmitted = false;
      state.errors = {};
    },
    submitBookingStart: (state) => {
      state.bookingLoading = true;
    },
    submitBookingSuccess: (state) => {
      state.bookingLoading = false;
      state.bookingSubmitted = true;
      state.errors = {};
    },
    submitBookingFailure: (state, action: PayloadAction<Record<string, string>>) => {
      state.bookingLoading = false;
      state.errors = action.payload;
    },
    submitBookingReset: (state) => {
      state.booking = initialBookingState;
      state.bookingSubmitted = false;
      state.errors = {};
    },
  },
});

export const {
  updateContactField,
  updateBookingField,
  setErrors,
  clearErrors,
  submitContactStart,
  submitContactSuccess,
  submitContactFailure,
  submitContactReset,
  submitBookingStart,
  submitBookingSuccess,
  submitBookingFailure,
  submitBookingReset,
} = formSlice.actions;

export default formSlice.reducer;
