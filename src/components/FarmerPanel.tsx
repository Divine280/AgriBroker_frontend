import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Alert, AlertDescription } from './ui/alert';
import { Progress } from './ui/progress';
import { 
  Plus, 
  Package, 
  Edit, 
  Trash2, 
  DollarSign, 
  Calendar, 
  MapPin,
  CheckCircle,
  Clock,
  AlertTriangle,
  Sprout,
  Star
} from 'lucide-react';

export function FarmerPanel() {
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const farmerStats = {
    totalEarnings: '2,450,000',
    activeListings: 8,
    completedSales: 45,
    rating: 4.8
  };

  const products = [
    {
      id: 1,
      name: 'Premium Coffee Beans',
      category: 'Coffee',
      quantity: '500 kg',
      pricePerKg: '2,500',
      totalValue: '1,250,000',
      status: 'active',
      location: 'Nyabihu District',
      harvestDate: '2024-08-15',
      quality: 'Grade A',
      image: 'https://images.unsplash.com/photo-1615637765047-c156d0d78869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYWdyaWN1bHR1cmUlMjBtYXJrZXR8ZW58MXx8fHwxNzU2ODAwODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      name: 'Organic Tea Leaves',
      category: 'Tea',
      quantity: '300 kg',
      pricePerKg: '1,800',
      totalValue: '540,000',
      status: 'pending',
      location: 'Nyamasheke District',
      harvestDate: '2024-08-20',
      quality: 'Premium',
      image: 'https://images.unsplash.com/photo-1615637765047-c156d0d78869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYWdyaWN1bHR1cmUlMjBtYXJrZXR8ZW58MXx8fHwxNzU2ODAwODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      name: 'White Maize',
      category: 'Grains',
      quantity: '1,200 kg',
      pricePerKg: '800',
      totalValue: '960,000',
      status: 'sold',
      location: 'Gatsibo District',
      harvestDate: '2024-07-30',
      quality: 'Grade B',
      image: 'https://images.unsplash.com/photo-1615637765047-c156d0d78869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYWdyaWN1bHR1cmUlMjBtYXJrZXR8ZW58MXx8fHwxNzU2ODAwODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-[#007749] text-white"><CheckCircle className="w-3 h-3 mr-1" />Active</Badge>;
      case 'pending':
        return <Badge className="bg-[#FFD100] text-black"><Clock className="w-3 h-3 mr-1" />Pending Review</Badge>;
      case 'sold':
        return <Badge className="bg-[#00AEEF] text-white"><DollarSign className="w-3 h-3 mr-1" />Sold</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleAddProduct = () => {
    setIsAddingProduct(false);
    // Add product logic here
  };

  return (
    <div className="space-y-8">
      {/* Farmer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-[#007749] to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Total Earnings</p>
                <p className="text-2xl font-bold">{farmerStats.totalEarnings} RWF</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Listings</p>
                <p className="text-2xl font-bold text-gray-900">{farmerStats.activeListings}</p>
              </div>
              <Package className="h-8 w-8 text-[#00AEEF]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Completed Sales</p>
                <p className="text-2xl font-bold text-gray-900">{farmerStats.completedSales}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-[#007749]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Farmer Rating</p>
                <div className="flex items-center space-x-1">
                  <p className="text-2xl font-bold text-gray-900">{farmerStats.rating}</p>
                  <Star className="h-5 w-5 text-[#FFD100] fill-current" />
                </div>
              </div>
              <Star className="h-8 w-8 text-[#FFD100]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Success Alert */}
      <Alert className="border-[#007749] bg-green-50">
        <CheckCircle className="h-4 w-4 text-[#007749]" />
        <AlertDescription className="text-[#007749]">
          <strong>Verification Complete!</strong> Your farmer profile has been verified by the Rwanda Agriculture Board. 
          You can now list products and receive payments.
        </AlertDescription>
      </Alert>

      {/* Products Section */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Sprout className="h-5 w-5 text-[#007749]" />
              <span>My Products</span>
            </CardTitle>
            <Dialog open={isAddingProduct} onOpenChange={setIsAddingProduct}>
              <DialogTrigger asChild>
                <Button className="bg-[#007749] hover:bg-green-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Product
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Product Listing</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="productName">Product Name</Label>
                      <Input id="productName" placeholder="e.g., Premium Coffee Beans" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="coffee">Coffee</SelectItem>
                          <SelectItem value="tea">Tea</SelectItem>
                          <SelectItem value="grains">Grains</SelectItem>
                          <SelectItem value="vegetables">Vegetables</SelectItem>
                          <SelectItem value="fruits">Fruits</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity (kg)</Label>
                      <Input id="quantity" type="number" placeholder="500" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pricePerKg">Price per Kg (RWF)</Label>
                      <Input id="pricePerKg" type="number" placeholder="2500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="e.g., Nyabihu District" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="harvestDate">Harvest Date</Label>
                      <Input id="harvestDate" type="date" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quality">Quality Grade</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quality grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="grade-a">Grade A</SelectItem>
                        <SelectItem value="grade-b">Grade B</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your product quality, farming methods, certifications..."
                      rows={3}
                    />
                  </div>

                  <div className="flex justify-end space-x-3">
                    <Button variant="outline" onClick={() => setIsAddingProduct(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddProduct} className="bg-[#007749] hover:bg-green-700">
                      List Product
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 right-3">
                    {getStatusBadge(product.status)}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500">Quantity</p>
                        <p className="font-medium">{product.quantity}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Price/kg</p>
                        <p className="font-medium">{product.pricePerKg} RWF</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <p className="text-lg font-bold text-[#007749]">{product.totalValue} RWF</p>
                      <p className="text-xs text-gray-500">Total Value</p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{product.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{product.harvestDate}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-red-600 hover:text-red-700">
                        <Trash2 className="w-3 h-3 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}