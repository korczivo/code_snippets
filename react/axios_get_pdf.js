import FileSaver from 'file-saver';

import {
  createAsyncThunk,
} from '@reduxjs/toolkit';

import { request } from '@/utils/request';

export const api = {
  generateInvoice: (data) => request.post('v1/invoice/', data, { responseType: 'blob' }),
};

export const generateInvoiceAction = createAsyncThunk(
  ('generate-invoice'),
    async (invoice, {
      rejectWithValue,
    }) => {
      try {
        const { request: { response } } = await api.generateInvoice(invoice);

        FileSaver.saveAs(response, 'invoice.pdf');

        return true;
      } catch ({ response: { data } }) {
        return rejectWithValue(data);
      }
    }
);
