<template>
  <q-page>
    <q-card class="bg-transparent no-shadow no-border q-ma-md">
      <q-card-section class="q-pa-none">
        <div class="row q-col-gutter-sm ">
          <div class="col-md-3 col-sm-12 col-xs-12">
            <q-item style="background-color: #5064b5" class="q-pa-none q-ml-xs bounceInLeft">
              <q-item-section
                side
                style="background-color: #3e51b5"
                class=" q-pa-lg q-mr-none text-white">
                <q-icon name="store_mall_directory" color="white" size="24px"></q-icon>
              </q-item-section>
              <q-item-section class=" q-pa-md q-ml-none  text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder">
                  {{ products.length }}
                </q-item-label>
                <q-item-label>{{ $t('product.plural') }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12">
            <q-item style="background-color: #f37169" class="q-pa-none q-ml-xs ">
              <q-item-section
                side
                style="background-color: #f34636"
                class=" q-pa-lg q-mr-none text-white">
                <q-icon name="category" size="24px"></q-icon>
              </q-item-section>
              <q-item-section class=" q-pa-md q-ml-none  text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder">12</q-item-label>
                <q-item-label>{{ $t('category.plural') }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <single-uploader-app />
  </q-page>
</template>

<script>
import { getProducts } from '../services/product.service';
import SingleUploaderApp from '../components/SingleUploaderApp';

export default {
  name: 'Index',
  components: {
    SingleUploaderApp,
  },
  data() {
    return {
      selected: [],
      lastIndex: null,
      products: [],
      columns: [
        {
          name: 'index',
          label: 'No',
          field: 'index',
        },
        {
          name: 'image',
          required: true,
          label: 'Image',
          align: 'left',
          field: 'image',
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: 'title',
          align: 'center',
          label: 'Title',
          field: 'title',
          sortable: true,
        },
        {
          name: 'description',
          label: 'Description',
          align: 'center',
          field: 'description',
          sortable: true,
        },
        {
          name: 'price',
          label: 'Price',
          field: 'price',
        },
        {
          name: 'amount',
          label: 'Amount',
          field: 'amount',
        },
        {
          name: 'category',
          label: 'Category',
          align: 'center',
          field: 'category',
        },
        {
          name: 'created-at',
          label: 'created at',
          field: 'createdAt',
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
        {
          name: 'action',
          label: 'Action',
          field: 'action',
        },
      ],
    };
  },
  async created() {
    const { data: products } = await getProducts();
    if (products) {
      products.forEach((row, index) => {
        row.index = index;
      });
      this.products = products;
    }
  },
};
</script>
