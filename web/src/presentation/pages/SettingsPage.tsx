import { useState } from 'react';
import { User, Lock, CreditCard, Key, Chrome, Shield } from 'lucide-react';
import { Button } from '@/presentation/ui/button';

type SettingsTab = 'profile' | 'security' | 'billing' | 'api';

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 hidden lg:block">Settings</h1>
      <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">Manage your account and preferences</p>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        
        <div className="lg:w-64 shrink-0">
          
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as SettingsTab)}
            className="lg:hidden w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="profile">Profile</option>
            <option value="security">Security</option>
            <option value="billing">Billing</option>
            <option value="api">API Keys</option>
          </select>

          
          <div className="hidden lg:block space-y-1">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left whitespace-nowrap ${
                activeTab === 'profile'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent'
              }`}
            >
              <User className="w-5 h-5 shrink-0" />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left whitespace-nowrap ${
                activeTab === 'security'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent'
              }`}
            >
              <Lock className="w-5 h-5 shrink-0" />
              <span>Security</span>
            </button>
            <button
              onClick={() => setActiveTab('billing')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left whitespace-nowrap ${
                activeTab === 'billing'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent'
              }`}
            >
              <CreditCard className="w-5 h-5 shrink-0" />
              <span>Billing</span>
            </button>
            <button
              onClick={() => setActiveTab('api')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left whitespace-nowrap ${
                activeTab === 'api'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent'
              }`}
            >
              <Key className="w-5 h-5 shrink-0" />
              <span>API Keys</span>
            </button>
          </div>
        </div>

        
        <div className="flex-1 min-w-0">
          {activeTab === 'profile' && (
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-6">Profile Information</h2>

              <div className="space-y-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-medium">
                    JD
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Change Photo
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      JPG or PNG. Max size 2MB.
                    </p>
                  </div>
                </div>

                
                <div>
                  <label className="block text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                
                <div>
                  <label className="block text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                
                <div>
                  <label className="block text-sm mb-3">Connected Accounts</label>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <Chrome className="w-5 h-5" />
                      <div>
                        <p className="font-medium">Google</p>
                        <p className="text-xs text-muted-foreground">john.doe@gmail.com</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Disconnect
                    </Button>
                  </div>
                </div>

                
                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="primary">Save Changes</Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-6">Security Settings</h2>

              <div className="space-y-6">
                
                <div>
                  <h3 className="font-medium mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">Current Password</label>
                      <input
                        type="password"
                        placeholder="********"
                        className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">New Password</label>
                      <input
                        type="password"
                        placeholder="********"
                        className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        placeholder="********"
                        className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                </div>

                
                <div className="pt-6 border-t border-border">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium">Two-Factor Authentication</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                    </div>
                    <Button variant="outline">Enable</Button>
                  </div>
                </div>

                
                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                  <Button variant="outline" size="md">Cancel</Button>
                  <Button variant="primary" size="md">Update Password</Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Current Plan</h2>
                    <p className="text-muted-foreground">Manage your subscription</p>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    Pro Plan
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Plan</span>
                    <span className="font-medium">Pro</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Price</span>
                    <span className="font-medium">$49/month</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Next billing date</span>
                    <span className="font-medium">February 29, 2026</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-muted-foreground">Payment method</span>
                    <span className="font-medium">**** 4242</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Button variant="outline" size="md">Change Plan</Button>
                  <Button variant="outline" size="md">Update Payment</Button>
                </div>
              </div>

              
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-xl font-semibold mb-6">Billing History</h2>
                <div className="space-y-3">
                  {[
                    { date: 'Jan 29, 2026', amount: '$49.00', status: 'Paid' },
                    { date: 'Dec 29, 2025', amount: '$49.00', status: 'Paid' },
                    { date: 'Nov 29, 2025', amount: '$49.00', status: 'Paid' },
                  ].map((invoice, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-muted rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{invoice.date}</p>
                        <p className="text-sm text-muted-foreground">{invoice.amount}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-success">{invoice.status}</span>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-1">API Keys</h2>
                  <p className="text-muted-foreground">Manage your API keys for integration</p>
                </div>
                <Button variant="primary">Generate New Key</Button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: 'Production API Key',
                    key: 'sk_live_************1234',
                    created: 'Created Jan 15, 2026',
                  },
                  {
                    name: 'Development API Key',
                    key: 'sk_test_************5678',
                    created: 'Created Dec 20, 2025',
                  },
                ].map((apiKey, i) => (
                  <div key={i} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">{apiKey.name}</p>
                        <p className="text-sm text-muted-foreground font-mono mt-1">
                          {apiKey.key}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Revoke
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">{apiKey.created}</p>
                  </div>
                ))}
              </div>

              
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="font-medium mb-4">API Usage This Month</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Requests</span>
                    <span className="font-medium">45,231 / 100,000</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

