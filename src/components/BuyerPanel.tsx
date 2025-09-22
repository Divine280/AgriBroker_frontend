import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Slider } from './ui/slider';
import { 
  Search, 
  Filter, 
  Plus, 
  MapPin, 
  Calendar, 
  Star, 
  Package, 
  DollarSign,
  ShoppingCart,
  Eye,
  Heart,
  MessageCircle
} from 'lucide-react';

export function BuyerPanel() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isPostingDemand, setIsPostingDemand] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Premium Coffee Beans',
      farmer: 'Marie Uwimana',
      farmerRating: 4.8,
      category: 'Coffee',
      quantity: '500 kg',
      pricePerKg: 2500,
      totalValue: 1250000,
      location: 'Nyabihu District',
      harvestDate: '2024-08-15',
      quality: 'Grade A',
      image: 'https://images.unsplash.com/photo-1615637765047-c156d0d78869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYWdyaWN1bHR1cmUlMjBtYXJrZXR8ZW58MXx8fHwxNzU2ODAwODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      certified: true,
      discount: 0
    },
    {
      id: 2,
      name: 'Organic Tea Leaves',
      farmer: 'Jean Baptiste',
      farmerRating: 4.9,
      category: 'Tea',
      quantity: '300 kg',
      pricePerKg: 1800,
      totalValue: 540000,
      location: 'Nyamasheke District',
      harvestDate: '2024-08-20',
      quality: 'Premium',
      image: 'https://images.unsplash.com/photo-1615637765047-c156d0d78869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYWdyaWN1bHR1cmUlMjBtYXJrZXR8ZW58MXx8fHwxNzU2ODAwODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      certified: true,
      discount: 5
    },
    {
      id: 3,
      name: 'White Maize',
      farmer: 'Grace Mukamana',
      farmerRating: 4.6,
      category: 'Grains',
      quantity: '1,200 kg',
      pricePerKg: 800,
      totalValue: 960000,
      location: 'Gatsibo District',
      harvestDate: '2024-07-30',
      quality: 'Grade B',
      image: 'https://images.unsplash.com/photo-1615637765047-c156d0d78869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYWdyaWN1bHR1cmUlMjBtYXJrZXR8ZW58MXx8fHwxNzU2ODAwODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      certified: false,
      discount: 10
    },
    {
      id: 4,
      name: 'Red Beans',
      farmer: 'Paul Nkurunziza',
      farmerRating: 4.7,
      category: 'Legumes',
      quantity: '800 kg',
      pricePerKg: 1200,
      totalValue: 960000,
      location: 'Musanze District',
      harvestDate: '2024-08-10',
      quality: 'Grade A',
      image: 'https://images.unsplash.com/photo-1615637765047-c156d0d78869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYWdyaWN1bHR1cmUlMjBtYXJrZXR8ZW58MXx8fHwxNzU2ODAwODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      certified: true,
      discount: 0
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
    const matchesPrice = product.pricePerKg >= priceRange[0] && product.pricePerKg <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handlePostDemand = () => {
    setIsPostingDemand(false);
    // Post demand logic here
  };

  const getDiscountedPrice = (price: number, discount: number) => {
    return price * (1 - discount / 100);
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <CardTitle className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-[#00AEEF]" />
              <span>Agricultural Marketplace</span>
            </CardTitle>
            <Dialog open={isPostingDemand} onOpenChange={setIsPostingDemand}>
              <DialogTrigger asChild>
                <Button className="bg-[#FFD100] text-black hover:bg-yellow-400">
                  <Plus className="w-4 h-4 mr-2" />
                  Post Demand
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Post Product Demand</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="demandProduct">Product Needed</Label>
                      <Input id="demandProduct" placeholder="e.g., Coffee Beans" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="demandCategory">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="coffee">Coffee</SelectItem>
                          <SelectItem value="tea">Tea</SelectItem>
                          <SelectItem value="grains">Grains</SelectItem>
                          <SelectItem value="legumes">Legumes</SelectItem>
                          <SelectItem value="vegetables">Vegetables</SelectItem>
                          <SelectItem value="fruits">Fruits</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="demandQuantity">Quantity Needed (kg)</Label>
                      <Input id="demandQuantity" type="number" placeholder="1000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxPrice">Max Price per Kg (RWF)</Label>
                      <Input id="maxPrice" type="number" placeholder="2000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="deliveryLocation">Delivery Location</Label>
                      <Input id="deliveryLocation" placeholder="e.g., Kigali City" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deadline">Delivery Deadline</Label>
                      <Input id="deadline" type="date" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Quality Requirements</Label>
                    <Textarea 
                      id="requirements" 
                      placeholder="Specify quality standards, certifications, packaging requirements..."
                      rows={3}
                    />
                  </div>

                  <div className="flex justify-end space-x-3">
                    <Button variant="outline" onClick={() => setIsPostingDemand(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handlePostDemand} className="bg-[#FFD100] text-black hover:bg-yellow-400">
                      Post Demand
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products or farmers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="coffee">Coffee</SelectItem>
                <SelectItem value="tea">Tea</SelectItem>
                <SelectItem value="grains">Grains</SelectItem>
                <SelectItem value="legumes">Legumes</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range */}
            <div className="space-y-2">
              <Label className="text-sm">Price Range (RWF)</Label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={5000}
                min={0}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>{priceRange[0]} RWF</span>
                <span>{priceRange[1]} RWF</span>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center">
              <Badge variant="outline" className="text-[#00AEEF] border-[#00AEEF]">
                {filteredProducts.length} Products Found
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {product.discount > 0 && (
                <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                  -{product.discount}%
                </Badge>
              )}
              {product.certified && (
                <Badge className="absolute top-3 right-3 bg-[#007749] text-white">
                  Certified
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="absolute bottom-3 right-3 bg-white/80 hover:bg-white"
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">{product.farmer}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-[#FFD100] fill-current" />
                      <span className="text-xs">{product.farmerRating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Quantity</p>
                    <p className="font-medium">{product.quantity}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Quality</p>
                    <p className="font-medium">{product.quality}</p>
                  </div>
                </div>

                <div className="space-y-1">
                  {product.discount > 0 ? (
                    <div className="flex items-center space-x-2">
                      <p className="text-lg font-bold text-[#007749]">
                        {getDiscountedPrice(product.pricePerKg, product.discount).toLocaleString()} RWF/kg
                      </p>
                      <p className="text-sm text-gray-500 line-through">
                        {product.pricePerKg.toLocaleString()} RWF/kg
                      </p>
                    </div>
                  ) : (
                    <p className="text-lg font-bold text-[#007749]">
                      {product.pricePerKg.toLocaleString()} RWF/kg
                    </p>
                  )}
                  <p className="text-xs text-gray-500">
                    Total: {product.discount > 0 
                      ? (getDiscountedPrice(product.pricePerKg, product.discount) * parseInt(product.quantity)).toLocaleString()
                      : product.totalValue.toLocaleString()
                    } RWF
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span className="line-clamp-1">{product.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{product.harvestDate}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Contact
                  </Button>
                  <Button size="sm" className="flex-1 bg-[#00AEEF] hover:bg-blue-600">
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Buy
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <Card className="border-0 shadow-lg">
          <CardContent className="p-12 text-center">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No Products Found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search criteria or post a demand to let farmers know what you're looking for.
            </p>
            <Button onClick={() => setIsPostingDemand(true)} className="bg-[#FFD100] text-black hover:bg-yellow-400">
              Post Your Demand
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}